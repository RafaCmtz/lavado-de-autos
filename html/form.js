$(document).ready(function() {
    $("#basic-form").validate({
        rules:{
            nombres:{
                required:true,
                minlength:3
                
            },
            apellidos:{
                required:true,
                minlength:3
            },
            rut:{
                required:true,
                number:true,
                minlength:8 
                
            },
                direccion:{
                    requered:true,
                    number:true,
                    letters:true,
                    minlength:8
                },
                menssages:{
                    nombre:{
                        minlength:"nombre should be at least 3 characters"
                    },
                    apellidos:{
                    required:"please enter your apellidos,should be at least 3 characters"
                    },
                    rut:{
                        rut:"please enter your rut as a numerical value"
                    },
                     domicilio:{
                         required: "please enter your domicilio ,should be at least 3 characters and numbers"
                     }
                    }
                    }
                });
                

            
            
            
});