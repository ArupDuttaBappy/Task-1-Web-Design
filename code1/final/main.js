 window.addEventListener('click',function(event){
        if(event.target.matches('.input-select'))
        {
            var parent = event.target.parentNode;
            if(!parent.classList.contains('active'))
            {
                parent.classList.add('active');
            }
            else if(parent.classList.contains('active'))
            {
                parent.classList.remove('active');
            }
        }
        else {
            var option_list = document.querySelectorAll('.search-box-container').forEach((item, i) => {
                if(item.classList.contains('active'))
                {
                    item.classList.remove('active');
                }
                
            });

        }
    })