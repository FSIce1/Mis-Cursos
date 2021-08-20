

new Vue({
    el: "#main",

    data(){
        return {
            titulo: "Cursos",
            platziLogo: [
                "https://static.platzi.com/mf-landings/image/isotipoPlatzi-442ccc1186a9806e18c9889cc301ffe1.png",
                "https://static.platzi.com/mf-landings/image/logotipo-platzi-768799552e5f26369e21a807b8a533f7.png",
            ],
            students: ["Wandy Santana", "Megan Herrera", "Zeus Amenadiel", "Johan Garzon"],
            cursos: [],
            nombreCurso: "",
            color: "35393B",
            colorTexto: "fafafa",
            numeroCurso: "",
            colorError: "98CA3F",
            error: false
        }
    },
    methods: {
        agregaCurso(){
            if(this.nombreCurso === "" || this.numeroCurso === ""){
                return (this.error = true)
            } else {
                (this.error = false)
            }

            let curso = {
                nombreCurso: this.nombreCurso,
                numeroCurso: parseInt(this.numeroCurso)
            };   

            this.cursos.push(curso);

            this.nombreCurso = "";
            this.numeroCurso = "";

        },
        
        cambiaColor(){

            console.log(this.color)

            if(this.color==='35393B'){ // DE OSCURO -> BLANCO
                this.color='fafafa'; // Fondo blanco 
                this.colorTexto='35393B'; // Texto color plomo
                this.colorError='ff0000'; // Error color rojo
            }else { // De BLANCO -> OSCURO
                this.color='35393B';    // Fondo plomo
                this.colorTexto='fafafa'; // Texto color blanco
                this.colorError='98CA3F'; // Error color verde
            }

            //this.color=='35393B'?this.color=='fafafa':this.color=='35393B'
            //this.color = this.color.split('').reverse().join('')
        }

    },

    computed: {
        tiempototal: function(){

            if(this.cursos.length === 0) 
                return "No hay cursos disponibles"

            let tiempo = 0;

            for(let i=0; i<=this.cursos.length -1; i++){
                tiempo = tiempo + this.cursos[i].numeroCurso;
            }

            return tiempo;
        }
    }

})