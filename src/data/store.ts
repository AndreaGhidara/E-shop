import { reactive } from 'vue'

export const store = reactive({

    name: "Link",
    age: 24,

    newUser: {
        name: "",
        age: 17,
    },

    calculateAddiction(num1: number, num2: number) {
        const Total = num1 + num2
        console.log(this.newUser);
        console.log(this.name);

        return Total
    }


})