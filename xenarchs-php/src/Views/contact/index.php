<h1 class="text-center mb-4">Contact Form</h1>

<form method="POST" action="/contact" class="mx-auto" style="max-width: 400px;">

    <div class="form-group">
        <label>Name</label>
        <input
            type="text"
            name="name"
            class="form-control <?= isset($errors['name']) ? 'is-invalid' : '' ?>"
            value="<?= htmlspecialchars($old['name'] ?? '') ?>"
        >
        <?php if (isset($errors['name'])): ?>
            <div class="invalid-feedback">
                <?= $errors['name'] ?>
            </div>
        <?php endif; ?>
    </div>

    <div class="form-group">
        <label>Message</label>
        <textarea
            name="message"
            class="form-control <?= isset($errors['message']) ? 'is-invalid' : '' ?>"
            rows="3"
        ><?= htmlspecialchars($old['message'] ?? '') ?></textarea>
        <?php if (isset($errors['message'])): ?>
            <div class="invalid-feedback">
                <?= $errors['message'] ?>
            </div>
        <?php endif; ?>
    </div>

    <button type="submit" class="btn btn-primary btn-block">
        Submit
    </button>
</form>

<?php if (!empty($success)): ?>
    <hr>
    <div class="alert alert-success mt-4">
        <h5>Form Submitted Successfully</h5>
        <p><strong>Name:</strong> <?= htmlspecialchars($name) ?></p>
        <p><strong>Message:</strong> <?= htmlspecialchars($message) ?></p>
    </div>
<?php endif; ?>
