const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
	// DO YOUR MAGIC
	// Note: you can either write "manual" validation logic
	// or use the Yup library (not currently installed)
	const { name, budget } = req.body;
	if (name !== undefined && budget !== undefined) {
		if (name.trim().length >= 3 && name.trim().length <= 100) {
			if (typeof budget === 'number' && !isNaN(budget)) {
				if (budget > 0 && budget < 1000000) {
					res.json('Works!');
				} else {
					res
						.status(400)
						.json({ message: 'budget of account is too large or too small' });
				}
			} else {
				res.status(400).json({ message: 'budget of account must be a number' });
			}
		} else {
			res
				.status(400)
				.json({ message: 'name of account must be between 3 and 100' });
		}
	} else {
		res.status(400).json({ message: 'name and budget are required' });
	}
};

exports.checkAccountNameUnique = (req, res, next) => {
	// DO YOUR MAGIC
	const { name } = req.body;
};

exports.checkAccountId = (req, res, next) => {
	// DO YOUR MAGIC
	const { id } = req.params;
	Accounts.getById(id).then((account) => {
		if (account) {
			req.account = account;
			next();
		} else {
			res.status(404).json({ message: 'account not found' });
		}
	});
};
