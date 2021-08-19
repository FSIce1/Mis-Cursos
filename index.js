

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
            numeroCurso: "",
            error: false
        }
    },
    methods: {
        agregaCurso(){
            console.log('SSS');
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