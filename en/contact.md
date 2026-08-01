---
layout: default
title: "Contact — Alejandro Pérez Velilla"
lang: en
page_type: contact
backdrop: /img/bg-contact.jpg
---

<a class="back-link" href="{{ '/en/index.html' | relative_url }}">&laquo; back to bio</a>

<h1 class="name">Contact</h1>

<div class="terminal-box">
    <div class="term-titlebar">
        <span>anthrocult@wired:~$ ./contact.sh</span>
        <span>[ONLINE]</span>
    </div>
    <div class="term-body">
        <p class="prompt typewriter tw-en">initializing message client...</p>

        <form id="term-contact-form" data-to="aperezvelilla@ucmerced.edu">
            <div class="term-field">
                <label for="c-name">name</label>
                <input type="text" id="c-name" name="name" required autocomplete="name">
            </div>
            <div class="term-field">
                <label for="c-email">reply_to</label>
                <input type="email" id="c-email" name="email" required autocomplete="email">
            </div>
            <div class="term-field">
                <label for="c-message">message</label>
                <textarea id="c-message" name="message" required></textarea>
            </div>
            <button type="submit" class="term-submit">[ send ]</button>
        </form>

        <p class="term-links prompt">or reach me directly: <a href="mailto:aperezvelilla@ucmerced.edu">aperezvelilla@ucmerced.edu</a> &middot; <a href="https://github.com/datadreamscorp">github.com/datadreamscorp</a> &middot; <a href="https://bsky.app/profile/apvelilla.bsky.social">bsky/apvelilla</a> &middot; <a href="https://www.linkedin.com/in/alejandro-p%C3%A9rez-velilla-a03b6725b/">linkedin</a></p>
    </div>
</div>

<script src="{{ '/assets/contact.js' | relative_url }}"></script>
