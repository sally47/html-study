const changeBtn = document.getElementsById('change-btn');
        const pet = document.getElementById('my-pet');

        changeBtn.addEventListener('click',function(){
        pet.innerText = "바보같은 거북이야~~";    
        });