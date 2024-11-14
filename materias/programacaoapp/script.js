function showContent(conteudoId) {
    
    const conteudos = document.querySelectorAll('.conteudo');
    conteudos.forEach(conteudo => conteudo.style.display = 'none');
    
   
    const conteudo = document.getElementById(conteudoId);
    conteudo.style.display = 'block';
}