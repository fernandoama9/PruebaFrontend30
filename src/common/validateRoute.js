class RoutesValidator {
	constructor() {
        this.regExpression = {
            id:/^\d{1,2}$/,
            twoLetter:/^[A-Za-z]{2}$/,   
            path:/^[A-Za-z0-9-_]{1,20}$/,   
            token: /^[A-Za-z0-9]{1,}$/,
            lifemilesNumber: /^\d{11}$/,  
            name: /^[A-Za-z]{1,}$/,
            number: /^\d{1,}$/,
            partner: /^[A-Za-z0-9]{1,}$/,
        }
    }

    validateEmailSt(nextState) {
        const params = nextState.params;
        return (this.regExpression.lifemilesNumber.test(params.lmNumber))
    }
    
    validateFormResponse(nextState) {
        const params = nextState.params;
        return (this.regExpression.id.test(params.id) && this.regExpression.path.test(params.url) && this.regExpression.id.test(params.type))
    }

    validateResetPasswordEnd(nextState){
        const params = nextState.params;
        return (this.regExpression.lifemilesNumber.test(params.lifemilesNumber) && this.regExpression.token.test(params.token))
    }

    validatePartners(nextState){
        const params = nextState.params;
        return (this.regExpression.partner.test(params.category) && this.regExpression.partner.test(params.id))
    }
    
    validateDealsOnePage(nextState){
        const params = nextState.params;
        return (this.regExpression.token.test(params.dealsCode))
    }

    validateDealsConfirmationPage(nextState){
        const params = nextState.params;
        
        return (this.regExpression.lifemilesNumber.test(params.lmNumber) 
                && this.regExpression.token.test(params.promoCode)
                && this.regExpression.twoLetter.test(params.language) 
                && this.regExpression.number.test(params.instCode) )
    }
}

export default RoutesValidator;