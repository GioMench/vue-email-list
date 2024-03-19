/*Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/

const { createApp } = Vue
createApp({
    data() {
        return {
            randomMail: []
        }
    },

    methods: {
        callApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail?items=10').then((response) => {
                console.log(response.data.response);
                theMail = response.data.response;
                //console.log(theMail)

                for (let i = 0; i < 10; i++) {
                    this.randomMail.push(theMail)
                }


            })
        },




    },
    mounted() {

        this.callApi(),
            
            console.log(this.randomMail);
    }

}).mount('#app')