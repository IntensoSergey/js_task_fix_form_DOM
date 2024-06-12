var e=document.querySelectorAll("input"),a=function(e){for(var a=e[0].toUpperCase(),l=1;l<e.length;l+=1)e[l]===e[l].toUpperCase()&&(a+=" "),a+=e[l];return a};e.forEach(function(e){e.placeholder=a(e.name),e.insertAdjacentHTML("beforebegin",'<label class="field-label" for="'.concat(e.id,'">\n      ').concat(e.placeholder.toUpperCase(),"\n    </label>"))});
//# sourceMappingURL=index.3098cceb.js.map
