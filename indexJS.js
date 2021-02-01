  const vaciar = () => {
    document.getElementById( "pantalla" ).value = "";
  }
  const cuadrado = () => {
    let num = document.getElementById( "pantalla" );
    num.value = num.value * num.value;
  }
  const mod = () => {
    let num = document.getElementById( "pantalla" );
    if ( num.value > 0 ) {
      num.value = num.value;
    } else {
      num.value = -num.value;
    }
  }
  const fact = () => {
    let num = document.getElementById( "pantalla" );
    var total = 1;
    for ( var i = 1; i <= num.value; i++ ) {
      total = total * i;
    }
    num.value = total;
  }
  const add = () => {
    let num = document.getElementById( "pantalla" );
    num.value = num.value * 2;
  }
  const mul = () => {
    let num = document.getElementById( "pantalla" );
    num.value = num.value * num.value;
  }
  const eq = () => {


  }

  function sumatorio() {
    let num = document.getElementById( "pantalla" );
    let list = num.value.split( "," );
    let i = 0,
      acc = 0;
    while ( i < list.length ) acc += +list[ i++ ];
    num.value = acc;
  }

  function ordenar() {
    let num = document.getElementById( "pantalla" );
    let list = num.value.split( "," );
    list.sort( function ( a, b ) {
      return a - b;
    } );
    num.value = list;

  }

  function revertir() {
    let num = document.getElementById( "pantalla" );
    let list = num.value.split( "," );
    list.reverse();
    num.value = list;
  }

  function quitar() {
    let num = document.getElementById( "pantalla" );
    let list = num.value.split( "," );
    list.pop();
    num.value = list;
  }

  function comparacion( a, b ) {
    return a > b ? 1 : b > a ? -1 : 0;
  }