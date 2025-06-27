a1=document.getElementById("box1")
a2=document.getElementById("box2")
a3=document.getElementById("box3")
a4=document.getElementById("box4")
a5=document.getElementById("box5")
a6=document.getElementById("box6")
a7=document.getElementById("box7")
a8=document.getElementById("box8")
a9=document.getElementById("box9")
a10=document.getElementById("box10")
a11=document.getElementById("box11")
a12=document.getElementById("box12")
a13=document.getElementById("box13")
a14=document.getElementById("box14")
a15=document.getElementById("box15")
a16=document.getElementById("box16")
a17=document.getElementById("box17")
a18=document.getElementById("box18")
a19=document.getElementById("box19")
a20=document.getElementById("box20")
a21=document.getElementById("box21")
a22=document.getElementById("box22")
a23=document.getElementById("box23")
a24=document.getElementById("box24")
a25=document.getElementById("box25")
a26=document.getElementById("box26")

b1=document.getElementById("ib1")
//a1.style.backgroundColor="yellow"

h=document.getElementById("head")

setInterval(() =>{
  g1=Math.floor(Math.random()*255)
  g2=Math.floor(Math.random()*255)
  g3=Math.floor(Math.random()*255)
r1=Math.floor(Math.random()*150)
r2=Math.floor(Math.random()*150)
r3=Math.floor(Math.random()*155)
  h.style.color=`rgb(${r1},${r2},${r3+100})`
  h.style.borderColor=`rgb(${g1},${g2},${g3+100})`
},1000)

 f = document.getElementById("fi");
     p = document.getElementById("photo");
   

    f.addEventListener("change", function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          p.src = e.target.result;
          p.style.display = "block";
          p.style.clipPath = "none";
          p.style.opacity=1
           // Reset shape if re-uploaded
        }
        reader.readAsDataURL(file);
      }
    });
    a1.addEventListener("click", () =>{
      p.style.clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
      
    })
    a2.addEventListener("click", () =>{
      p.style.clipPath="polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%"
    })
      a3.addEventListener("click", () =>{
      p.style.clipPath="polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
    })
     a4.addEventListener("click", () =>{
      p.style.clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
    })
    a5.addEventListener("click", () =>{
      p.style.clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
    })
     a6.addEventListener("click", () =>{
      p.style.clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
    })
  a7.addEventListener("click", () =>{
      p.style.clipPath="polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
    })
    a8.addEventListener("click", () =>{
      p.style.clipPath=" polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
    })
       a9.addEventListener("click", () =>{
      p.style.clipPath="polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)"
    })
    a10.addEventListener("click", () =>{
      p.style.clipPath="polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"
    })
     a11.addEventListener("click", () =>{
      p.style.clipPath="polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
    })
      a12.addEventListener("click", () =>{
      p.style.clipPath="polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)"
    })
  
      a14.addEventListener("click", () =>{
      p.style.clipPath="polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)"
    })
     a15.addEventListener("click", () =>{
      p.style.clipPath="polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"
    })
    a16.addEventListener("click", () =>{
      p.style.clipPath="polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)"
    })
    a17.addEventListener("click", () =>{
      p.style.clipPath="polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)"
    })
    a18.addEventListener("click", () =>{
      p.style.clipPath="polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)"
    })
    a19.addEventListener("click", () =>{
      p.style.clipPath=" polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
    })
    a20.addEventListener("click", () =>{
      p.style.clipPath=" polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)"
    })
    a21.addEventListener("click", () =>{
      p.style.clipPath=" polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"

    })
    a22.addEventListener("click", () =>{
      p.style.clipPath=" polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)"
    })
    a23.addEventListener("click", () =>{
      p.style.clipPath=" polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)"
    })
    a24.addEventListener("click", () =>{
      p.style.clipPath=" inset(5% 20% 15% 10%)"
    })
    a25.addEventListener("click", () =>{
      p.style.clipPath=" circle(50% at 50% 50%)"
    })
    a26.addEventListener("click", () =>{
      p.style.clipPath=" ellipse(25% 40% at 50% 50%)"
    })

    pn=document.getElementById("pritam")
setInterval(() =>{
  p1=Math.floor(Math.random()*255)
  p2=Math.floor(Math.random()*255)
  p3=Math.floor(Math.random()*255)
  pn.style.borderColor=`rgb(${p1},${p2},${p3})`
},1000)


