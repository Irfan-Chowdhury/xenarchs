
<h1 class="text-center mb-4">Contact Form</h1>

<form method="POST" action="/contact" class="mx-auto" style="max-width: 400px;">
    
    <div class="form-group">
        <label>Name</label>
        <input
            type="text"
            name="name"
            class="form-control"
            required
        >
    </div>

    <div class="form-group">
        <label>Message</label>
        <textarea
            name="message"
            class="form-control"
            rows="3"
            required
        ></textarea>
    </div>

    <button type="submit" class="btn btn-primary btn-block">
        Submit
    </button>
</form>

<?php if (!empty($name) || !empty($message)): ?>
    <hr>
    <div class="alert alert-success mt-4">
        <h5>Submitted Data</h5>
        <p><strong>Name:</strong> <?= htmlspecialchars($name) ?></p>
        <p><strong>Message:</strong> <?= htmlspecialchars($message) ?></p>
    </div>
<?php endif; ?>
