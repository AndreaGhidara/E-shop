<script setup lang="ts">

const DataForm = {
    proprietario: "",
    potenzaContatore: 0,
    spesaMensile: "",
    nome: "",
    cognome: "",
    numeroDiTelefono: "",
    provincia: "",
    codicePostale: "",
}

function sendForm() {
    console.log(DataForm);
}

// document.getElementById('button').addEventListener('click', toggleError)
const errMessages = document.querySelectorAll('#error')

function toggleError() {
    // Show error message
    errMessages.forEach((el) => {
        el.classList.toggle('hidden')
    })

    // Highlight input and label with red
    const allBorders = document.querySelectorAll('.border-gray-200')
    const allTexts = document.querySelectorAll('.text-gray-500')
    allBorders.forEach((el) => {
        el.classList.toggle('border-red-600')
    })
    allTexts.forEach((el) => {
        el.classList.toggle('text-red-600')
    })
}

</script>

<template>
    <div class="bg-emerald-400">
        <div class="container mx-auto flex flex-col">
            <div class="flex">
                <!-- FORM -->

                <!-- IMAGINE -->
                <div class="flex justify-center items-center">
                    <img src="" alt="">
                </div>
            </div>
            <div class="flex">
                <!-- Publicita -->
                <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
                    <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                        <h1 class="text-2xl font-bold mb-8">Rispondi a queste domande</h1>
                        <form id="form" novalidate>

                            <!-- Proprietario -->
                            <fieldset class="relative z-0 w-full p-px mb-5">
                                <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">Sei
                                    proprietario del imobile?</legend>
                                <div class="block pt-3 pb-2 space-x-4">
                                    <label>
                                        <input v-model="DataForm.proprietario" type="radio" name="radio" value="true"
                                            class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black" />
                                        Si
                                    </label>
                                    <label>
                                        <input v-model="DataForm.proprietario" type="radio" name="radio" value="false"
                                            class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black" />
                                        No
                                    </label>
                                </div>
                                <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </fieldset>

                            <!-- Potenza COntatore -->
                            <div class="relative z-0 w-full mb-5">
                                <input v-model="DataForm.potenzaContatore" type="number" name="potenzaContatore" placeholder=" "
                                    class="pt-3 pb-2 pl-7 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                                <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">Kw</div>
                                <label for="potenzaContatore"
                                    class="absolute duration-300 top-3 left-7 -z-1 origin-0 text-gray-500">Potenza
                                    Contatore</label>
                                <span class="text-sm text-red-600 hidden" id="error">Amount is required</span>
                            </div>
                            <!-- Nome -->
                            <div class="relative z-0 w-full mb-5">
                                <input type="text" name="nome" v-model="DataForm.nome" placeholder=" " required
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                                <label for="nome"
                                    class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nome</label>
                                <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
                            </div>
                            <!-- Cognome -->
                            <div class="relative z-0 w-full mb-5">
                                <input type="text" name="Cognome" v-model="DataForm.cognome" placeholder=" "
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                                <label for="Cognome"
                                    class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Cognome</label>
                                <span class="text-sm text-red-600 hidden" id="error">Email address is required</span>
                            </div>
                            <!-- Telefono -->
                            <div class="relative z-0 w-full mb-5">
                                <input type="tel" name="password" placeholder=" "
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                                <label for="tel"
                                    class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Telefono</label>
                                <span class="text-sm text-red-600 hidden" id="error">Password is required</span>
                            </div>
                            <!-- Proprietario Immobile -->
                            <!-- Provincia -->
                            <div class="relative z-0 w-full mb-5">
                                <select name="select" value="" onclick="this.setAttribute('value', this.value);"
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200">
                                    <option value="" selected disabled hidden></option>
                                    <option value="1">CN</option>
                                    <option value="2">TO</option>
                                    <option value="3">MI</option>
                                    <option value="4">GE</option>
                                    <option value="5">SV</option>
                                </select>
                                <label for="select"
                                    class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Provincia</label>
                                <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                            </div>

                            <div class="flex flex-row space-x-4">
                                <div class="relative z-0 w-full mb-5">
                                    <input type="text" name="date" placeholder=" "
                                        onclick="this.setAttribute('type', 'date');"
                                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                                    <label for="date"
                                        class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date</label>
                                    <span class="text-sm text-red-600 hidden" id="error">Date is required</span>
                                </div>
                                <div class="relative z-0 w-full">
                                    <input type="text" name="time" placeholder=" "
                                        onclick="this.setAttribute('type', 'time');"
                                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                                    <label for="time"
                                        class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Time</label>
                                    <span class="text-sm text-red-600 hidden" id="error">Time is required</span>
                                </div>
                            </div>


                            <div class="relative z-0 w-full mb-5">
                                <input type="text" name="duration" placeholder=" "
                                    class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200" />
                                <div class="absolute top-0 right-0 mt-3 mr-4 text-gray-400">min</div>
                                <label for="duration"
                                    class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Duration</label>
                                <span class="text-sm text-red-600 hidden" id="error">Duration is required</span>
                            </div>

                            <button @click="sendForm()" id="button" type="button"
                                class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none">
                                Send Form
                            </button>
                        </form>
                    </div>
                </div>
                <!-- IMAGINE -->
                <div>

                </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
.-z-1 {
    z-index: -1;
}

.origin-0 {
    transform-origin: 0%;
}

input:focus~label,
input:not(:placeholder-shown)~label,
textarea:focus~label,
textarea:not(:placeholder-shown)~label,
select:focus~label,
select:not([value='']):valid~label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
}

input:focus~label,
select:focus~label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, var(--tw-text-opacity));
    left: 0px;
}
</style>