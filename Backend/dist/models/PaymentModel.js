"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModel = void 0;
class PaymentModel {
    constructor(id, booking_id, payment_reference, masked_card_number) {
        this.id = id;
        this.booking_id = booking_id;
        this.payment_reference = payment_reference;
        this.masked_card_number = masked_card_number;
    }
}
exports.PaymentModel = PaymentModel;
//# sourceMappingURL=PaymentModel.js.map