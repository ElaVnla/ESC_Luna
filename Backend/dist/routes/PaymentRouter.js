"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({ message: 'Payment API is working!' });
});
exports.default = router;
//# sourceMappingURL=PaymentRouter.js.map