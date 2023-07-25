import { defineStore } from "pinia";


export const useFormStore = defineStore('form', {
    state: () => ({
        name: '' as string,
        email: '' as string,
        message: '' as string,
        formSubmissionCounter: 0 as number, 
        isFormValid: false as boolean
    }),
    getters: {
        isValidName: state => state.name.length > 0,
        isValidEmail: state => /^[^@]+@\w+(\.\w+)+\w$/.test(state.email),
    },
    actions: {
        async submitForm() {
            if (this.isValidName && this.isValidEmail) {
                // execute send form 
                this.isFormValid = true
                this.formSubmissionCounter++;
            } else {
                this.isFormValid = false
                this.formSubmissionCounter++;
                console.log("Form failed to submit. Please check fields")
            }

        }
    }
})
