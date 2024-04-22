// ウィンドウのロードが完了したときに実行されるコード
$(window).on('load',function(){
  console.log('loadイベントが発生しました');
 });
 
$(function() {
  //  	画面をスクロールしたとき
   
$(document).on('scroll', () => {
  console.log('scrollイベントが発生しました2');
});
   
});
