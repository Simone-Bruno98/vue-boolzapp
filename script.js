let app = new Vue({
        el: "#app",
            data: {
                currentperson : -1,
                people: [
                    {
                        nome: "Francesco Rossio",
                        immagine: "img/profile1.jpg",
                        oraUltimoMessaggio: "13:32",
                        messaggiNonLetti: "2",
                        visibile: true,
                        messaggi: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Hei tu, sei molto carino, sai?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                text: 'Sai che mi piacciono le ciabatte?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                text: 'Ora sai tutto di me.',
                                status: 'received'
                            },

                        ],
                    },
                    {
                        nome: "Emanuele Spina",
                        immagine: "img/profile2.jpg",
                        oraUltimoMessaggio: "15:32",
                        messaggiNonLetti: "5",
                        visibile: true,
                        messaggi: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Hai preso le fiaschette di veleno dalla mensola?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                text: 'Ricordati di darle da mangiare al postino.',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                text: 'Tutto fatto? Anche io.',
                                status: 'received'
                            },

                        ],
                    },
                    {
                        nome: "Giancarlo Piombetti",
                        immagine: "img/profile3.jpg",
                        oraUltimoMessaggio: "12:32",
                        messaggiNonLetti: "1",
                        visibile: false,
                        messaggi: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Hai per caso mangiato i croccantini di OTTO?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                text: 'Azz sei disgustoso',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                text: 'Dammene un pò, sono in chimica',
                                status: 'received'
                            },

                        ],
                    },
                    {
                        nome: "Jorge McGee",
                        immagine: "img/profile4.jpg",
                        oraUltimoMessaggio: "17:32",
                        messaggiNonLetti: "6",
                        visibile: true,
                        messaggi: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Hai visto che è arrivato il circo nero in città?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                text: 'Hai visto che non usano gli animali ma solo fruste?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                text: 'Dai, allora andiamo domani.',
                                status: 'received'
                            },

                        ],
                    },
                    {
                        nome: "Giulia Larosa",
                        immagine: "img/profile5.jpg",
                        oraUltimoMessaggio: "12:32",
                        messaggiNonLetti: "3",
                        visibile: false,
                        messaggi: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Hai per caso rubato tutti i fili da casa?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                text: 'Ma a me servono!',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                text: 'Andrò a dormire per strada allora.',
                                status: 'received'
                            },

                        ],
                    },
                    {
                        nome: "Matilde Battiato",
                        immagine: "img/profile6.jpg",
                        oraUltimoMessaggio: "21:32",
                        messaggiNonLetti: "7",
                        visibile: true,
                        messaggi: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Hai per caso giocato al gelataio con il vicino?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                text: 'Ti ho già detto che mi devi invitare!',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                text: 'Non ci si può proprio fidare di nessuno...',
                                status: 'received'
                            },

                        ],
                    },
                ],

            },
            methods: {
                messagesReceived(index){
                    this.currentperson = index;
                    
                }
            },
        
    })

    // this.contacts[focus].messages.push({
    //     text: this.inputMessage





        // pushare risultato dell' input nell' html

        // prendere il risultato dell' input scritto dall' utente al tasto invio
        // con una funzione aggiungerlo all' html all' interno di backtick
        function response(){
            let newMessage = document.querySelector(".newmessage")
            newMessage.innerHTML += ` 
                        <div class="row messageboard justify-content-start" >
                            <span class="col-5">
                               <span class="messagereceived">
                                    Ok
                                </span>  
                            </span>
                        </div>`;
        }


        function myFunction()
        {
            let newMessage = document.querySelector(".newmessage")
            let writtenMessage = document.querySelector("#writehere").value;
            newMessage.innerHTML += `
                        <div class="row justify-content-end mt-1">
                            <span class="col-5 newmessage">
                                <span class="messagesent">
                                    ${writtenMessage}
                                </span>
                            </span>
                        </div> `;
            setTimeout(response, 1000)            
        }               



        
            // delay(1000).then(() => newMessage.innerHTML += ` 
            //             <div class="row messageboard justify-content-start" >
            //                 <span class="col-5">
            //                     <span>
            //                         Ok
            //                     </span>  
            //                 </span>
            //             </div>`);
        

        // setTimeout(() => newMessage.innerHTML += ` 
        // <div class="row messageboard justify-content-start" >
        //     <span class="col-5">
        //         <span>
        //             Ok
        //         </span>  
        //     </span>
        // </div>`), 1000);
        // cliccando sul pulsande
        // prendi il messaggio scritto (salvato in una variabile)
        // salvi una variabile che deve contenere l' iniezione
        // inietti l' html con innerHTML