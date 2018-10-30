$(document).ready(() => {

  $('.alert-close').click(() => {
    $('.alert').alert('close')
  })

  $('.carousel').carousel({
    //interval:1000
  })

/*slide.bs.carousel事件监听

事件监听
show.bs.modal
shown.bs.modal
hide.bs.modal
hidden.bs.modal

/
 /* $('.carousel').on('slide.bs.carousel',(event) =>{
    console.log('slide:',`
      方向： ${event.direction}
      从：${event.from}
      到：${event.to}
      `)
  })*/

  $('[data-toggle="popover"]').popover()

  $('[data-toggle="tooltip"]').tooltip()

  $('#form-demo').submit(function(event){
    const form =$(this);
    if(form[0].checkValidity() === false){
      event.preventDefault();//防止表单的默认行为
      event.stopPropagation();
    }

    form.addClass('was-validated')
  })

})