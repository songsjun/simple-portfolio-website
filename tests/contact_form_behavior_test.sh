#!/usr/bin/env bash
set -eu

assert_contains() {
  file="$1"
  snippet="$2"
  if ! grep -Fq "$snippet" "$file"; then
    echo "Missing expected snippet in $file: $snippet" >&2
    exit 1
  fi
}

assert_not_contains() {
  file="$1"
  snippet="$2"
  if grep -Fq "$snippet" "$file"; then
    echo "Unexpected snippet found in $file: $snippet" >&2
    exit 1
  fi
}

assert_contains "index.html" 'id="hero"'
assert_contains "index.html" 'id="projects"'
assert_contains "index.html" 'id="contact"'
assert_contains "index.html" 'id="contact-form"'
assert_contains "index.html" 'name="name"'
assert_contains "index.html" 'name="email"'
assert_contains "index.html" 'name="message"'
assert_contains "index.html" 'mailto:sjunsong@gmail.com'
assert_contains "index.html" 'linkedin.com/in/minjun-song'
assert_contains "index.html" 'rel="noopener noreferrer"'

assert_contains "styles.css" '@media (min-width: 720px)'

assert_contains "script.js" 'form.addEventListener("submit"'
assert_contains "script.js" 'event.preventDefault();'
assert_contains "script.js" 'form.reportValidity();'
assert_contains "script.js" 'encodeURIComponent("Portfolio inquiry")'
assert_contains "script.js" 'window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;'
assert_not_contains "script.js" 'Portfolio inquiry from '
