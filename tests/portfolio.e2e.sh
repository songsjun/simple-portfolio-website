#!/bin/sh
set -eu

fail() {
  echo "FAIL: $1" >&2
  exit 1
}

assert_file() {
  [ -f "$1" ] || fail "Missing file: $1"
}

assert_contains() {
  file="$1"
  pattern="$2"
  message="$3"
  if ! grep -Eq "$pattern" "$file"; then
    fail "$message"
  fi
}

assert_file index.html
assert_file styles.css
assert_file script.js

assert_contains index.html '<header[^>]*>' 'document is missing a semantic header'
assert_contains index.html '<nav[^>]*>' 'document is missing a semantic nav'
assert_contains index.html '<main[^>]*>' 'document is missing a semantic main'
assert_contains index.html '<footer[^>]*>' 'document is missing a semantic footer'
assert_contains index.html '<section[^>]*id="hero"' 'hero section is missing'
assert_contains index.html '<section[^>]*id="projects"' 'projects section is missing'
assert_contains index.html '<section[^>]*id="contact"' 'contact section is missing'
assert_contains index.html 'href="#hero"' 'navigation is missing hero anchor'
assert_contains index.html 'href="#projects"' 'navigation is missing projects anchor'
assert_contains index.html 'href="#contact"' 'navigation is missing contact anchor'
assert_contains index.html 'Tagline:' 'hero is missing a short tagline'
assert_contains index.html 'Specialty:' 'hero is missing an explicit role or specialty statement'
assert_contains index.html 'Profile photo placeholder' 'hero is missing the photo placeholder'
assert_contains index.html '3\+ shipped|3\+|Focus on responsive UI|HTML5, CSS3, JavaScript' 'hero is missing credibility cues'

project_links=$(grep -Eo 'href="https?://[^"]+"' index.html | wc -l | tr -d ' ')
[ "$project_links" -ge 4 ] || fail 'expected at least 4 outbound links including projects and LinkedIn'

project_cards=$(grep -Eo '<article class="project-card">' index.html | wc -l | tr -d ' ')
[ "$project_cards" -ge 3 ] || fail 'expected at least 3 project cards'

assert_contains index.html '<form[^>]*id="contact-form"' 'contact form is missing'
assert_contains index.html 'name="name"' 'contact form is missing name field'
assert_contains index.html 'name="email"' 'contact form is missing email field'
assert_contains index.html 'name="message"' 'contact form is missing message field'
assert_contains index.html 'mailto:junsong.song.dev@gmail.com' 'direct email fallback is missing'
assert_contains index.html 'linkedin\.com/in/junsong-song' 'LinkedIn fallback is missing'
assert_contains index.html 'target="_blank" rel="noopener noreferrer"' 'external links must use noopener noreferrer'

assert_contains styles.css 'scroll-behavior: smooth' 'styles are missing smooth scrolling enhancement'
assert_contains styles.css '@media \(min-width: 760px\)' 'styles are missing responsive breakpoint'
assert_contains styles.css 'project-grid' 'styles are missing project grid rules'
assert_contains script.js 'encodeURIComponent' 'script must safely encode mailto values'
assert_contains script.js 'Name and email are required' 'script is missing validation message'
assert_contains script.js 'mailto:' 'script is missing mailto generation'

echo 'Portfolio static checks passed'
