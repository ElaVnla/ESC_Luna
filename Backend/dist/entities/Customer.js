"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
let Customer = class Customer {
};
exports.Customer = Customer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "salutation", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Customer.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Customer.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Customer.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Customer.prototype, "booking_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "billing_address", void 0);
exports.Customer = Customer = __decorate([
    (0, typeorm_1.Entity)("customers")
], Customer);
//# sourceMappingURL=Customer.js.map