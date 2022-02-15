const router = require('express').Router();
const Accounts = require('./accounts-model');
const {
	checkAccountPayload,
	checkAccountNameUnique,
	checkAccountId,
} = require('./accounts-middleware');

router.get('/', async (req, res, next) => {
	// DO YOUR MAGIC
	try {
		Accounts.getAll().then((accounts) => {
			res.status(200).json(accounts);
		});
	} catch (err) {
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

router.get('/:id', checkAccountId, async (req, res, next) => {
	// DO YOUR MAGIC
	try {
		res.status(200).json(req.account);
	} catch (err) {
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

router.post('/', checkAccountPayload, async (req, res, next) => {
	// DO YOUR MAGIC
	try {
		res.status(200).json({ message: 'Created!' });
	} catch (err) {
		res.status(500).json({ message: 'Internal Server' });
	}
});

router.put('/:id', (req, res, next) => {
	// DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
	// DO YOUR MAGIC
});

router.use((err, req, res, next) => {
	// eslint-disable-line
	// DO YOUR MAGIC
});

module.exports = router;
