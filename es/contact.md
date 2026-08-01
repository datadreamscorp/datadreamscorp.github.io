---
layout: default
title: "Contacto — Alejandro Pérez Velilla"
lang: es
backdrop: /img/bg-contact.jpg
---

<a class="back-link" href="{{ '/es/index.html' | relative_url }}">&laquo; volver a la biografía</a>

<h1 class="name">Contacto</h1>

<div class="terminal-box">
    <div class="term-titlebar">
        <span>anthrocult@wired:~$ ./contacto.sh</span>
        <span>[EN LÍNEA]</span>
    </div>
    <div class="term-body">
        <p class="prompt">inicializando cliente de mensajes...</p>

        <form id="term-contact-form" data-to="aperezvelilla@ucmerced.edu">
            <div class="term-field">
                <label for="c-name">nombre</label>
                <input type="text" id="c-name" name="name" required autocomplete="name">
            </div>
            <div class="term-field">
                <label for="c-email">responder_a</label>
                <input type="email" id="c-email" name="email" required autocomplete="email">
            </div>
            <div class="term-field">
                <label for="c-message">mensaje</label>
                <textarea id="c-message" name="message" required></textarea>
            </div>
            <button type="submit" class="term-submit">[ enviar ]</button>
        </form>

        <p class="term-note">Al enviar se abrirá tu cliente de correo con este mensaje ya escrito — nada se envía directamente desde esta página.</p>

        <p class="term-links prompt">o escríbeme directamente: <a href="mailto:aperezvelilla@ucmerced.edu">aperezvelilla@ucmerced.edu</a> &middot; <a href="https://github.com/datadreamscorp">github.com/datadreamscorp</a></p>
    </div>
</div>

<script src="{{ '/assets/contact.js' | relative_url }}"></script>
