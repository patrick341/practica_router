<template>
    <div class='simple_component'>
        <h2>This is a component</h2> 
        my_var: {{ my_var }}     
    </div>
    </template>
    
    <script>
    export default{    
        data(){ 
            return {
                my_var: 'hole Vue.js'            
            }
        }
    }
    </script>
    
    <style media="screen">
        .simple_component{
            background-color: #eeeeee;
        }
    </style>