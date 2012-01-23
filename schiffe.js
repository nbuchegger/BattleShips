play=0;
comphit1=10;
comphit2=10;
comphit10=10;
comphit20=10;
dir=4;
dir0=4;
pccount=1;
next=0;
plhit = new Array(5)
fielda = new Array(10);
fieldb = new Array(10);
for (i=0;i<10;i++)
{
   fielda[i] = new Array(10);
   fieldb[i] = new Array(10);
   for (j=0;j<10;j++)
   {
        fielda[i][j]=0;
        fieldb[i][j]=0;
   }
}
ships = new Array(6);
for (i=0;i<6;i++)
     ships[i]=0;

function setpc()
{
        setship(5);
        setship(4);
        setship(3);
        setship(2);
        setship(1);
}
function setship(ship)
{
   x=Math.floor(Math.random()*10);
   y=Math.floor(Math.random()*10);
   z=Math.floor(Math.random()*2);
   if ((x+ship>10 && z==0) || (y+ship>10 && z==1))
   {
       setship(ship);
       return 0;
   }
   if (x!=0 && x!=1 && x!=2 && x!=3 && x!=4 && x!=5 && x!=6 && x!=7 && x!=8 && x!=9)
      {
             setship(ship);
             return 0;
      }
   if (y!=0 && y!=1 && y!=2 && y!=3 && y!=4 && y!=5 && y!=6 && y!=7 && y!=8 && y!=9)
      {
             setship(ship);
             return 0;
      }
   if (z)
   {
       for (i=y;i<y+ship;i++)
       {
            if (fielda[x][i]!=0)
            {
                   setship(ship);
                   return 0;
            }
       }
       for (i=y;i<y+ship;i++)
       {
            fielda[x][i]=ship;
            //val="a"+x+""+i;
            //document.getElementById(val).style.backgroundColor="#ffffff";
       }
   }
   else
   {
       for (i=x;i<x+ship;i++)
       {
            if (fielda[i][y]!=0)
            {
                   setship(ship);
                   return 0;
            }
       }
       for (i=x;i<x+ship;i++)
       {
            fielda[i][y]=ship;
            //val="a"+i+""+y;
            //document.getElementById(val).style.backgroundColor="#ffffff";
       }
   }
    for (i=0;i<10;i++)
       {
          for (j=0;j<10;j++)
          {
               {
                  if(fielda[i][j]==ship)
                  {
                     if(i>0 && fielda[i-1][j]==0)
                       fielda[i-1][j]=-1;
                     if(i<9 && fielda[i+1][j]==0)
                       fielda[i+1][j]=-1;
                     if(j>0 && fielda[i][j-1]==0)
                       fielda[i][j-1]=-1;
                     if(j<9 && fielda[i][j+1]==0)
                       fielda[i][j+1]=-1;
                  }
               }
          }
       }
}

function set(ship)
{
   if (ships[ship])
   {
       alert("Schiff schon gesetzt!");
       return 0;
   }
   val="s"+ship+"1";
   x=document.getElementById(val).value.substr(0,1).toLowerCase();
   if (x=="a" || x=="") x=0;
   if (x=="b") x=1;
   if (x=="c") x=2;
   if (x=="d") x=3;
   if (x=="e") x=4;
   if (x=="f") x=5;
   if (x=="g") x=6;
   if (x=="h") x=7;
   if (x=="i") x=8;
   if (x=="j") x=9;
   if (x!=0 && x!=1 && x!=2 && x!=3 && x!=4 && x!=5 && x!=6 && x!=7 && x!=8 && x!=9)
   {
       alert("Koordinaten nicht korrekt!");
       return 0;
   }
   val="s"+ship+"1";
   y=document.getElementById(val).value.substr(1,1).toLowerCase();
   if (y=="") y=0;
   if (y!=0 && y!=1 && y!=2 && y!=3 && y!=4 && y!=5 && y!=6 && y!=7 && y!=8 && y!=9)
   {
       alert("Koordinaten nicht korrekt!");
       return 0;
   }
   if (ship==1)
   {
       a=x+1;
       b=y;
   }
   else
      {
      val="s"+ship+"2";
      a=document.getElementById(val).value.substr(0,1).toLowerCase();
      if (a=="a" || a=="") a=0;
      if (a=="b") a=1;
      if (a=="c") a=2;
      if (a=="d") a=3;
      if (a=="e") a=4;
      if (a=="f") a=5;
      if (a=="g") a=6;
      if (a=="h") a=7;
      if (a=="i") a=8;
      if (a=="j") a=9;
      if (a!=0 && a!=1 && a!=2 && a!=3 && a!=4 && a!=5 && a!=6 && a!=7 && a!=8 && a!=9)
      {
          alert("Koordinaten nicht korrekt!");
          return 0;
      }
      val="s"+ship+"2";
      b=document.getElementById(val).value.substr(1,1).toLowerCase();
      if (b=="") b=0;
      if (b!=0 && b!=1 && b!=2 && b!=3 && b!=4 && b!=5 && b!=6 && b!=7 && b!=8 && b!=9)
      {
          alert("Koordinaten nicht korrekt!");
          return 0;
      }
   }
   test=0;
   if (ship==1)
       a=x;
   if ((a-x==ship-1 && b==y) || (a==x && b-y==ship-1))
       test=1;
   if (!test)
   {
       alert("Schiffslaenge falsch!");
       return 0;
   }
   if (a!=x || ship==1)
   {
       for (i=x;i<=a;i++)
       {
            if (fieldb[i][y]!=0)
            {
                alert("Dieser Platz ist bereits belegt!");
                return 0;
            }
       }
       for (i=x;i<=a;i++)
       {
            val="b"+i+""+y;
            document.getElementById(val).style.backgroundColor="#ffff00";
            fieldb[i][y]=ship;
            ships[ship]=1;
       }
   }
   else if (b!=y)
   {
       for (i=y;i<=b;i++)
       {
            if (fieldb[x][i]!=0)
            {
                alert("Dieser Platz ist bereits belegt!");
                return 0;
            }
       }
       for (i=y;i<=b;i++)
       {
            val="b"+x+""+i;
            document.getElementById(val).style.backgroundColor="#ffff00";
            fieldb[x][i]=ship;
            ships[ship]=1;
       }
   }
   for (i=0;i<10;i++)
   {
      for (j=0;j<10;j++)
      {
           {
              if(fieldb[i][j]==ship)
              {
                 if(i>0 && fieldb[i-1][j]==0)
                   fieldb[i-1][j]=-1;
                 if(i<9 && fieldb[i+1][j]==0)
                   fieldb[i+1][j]=-1;
                 if(j>0 && fieldb[i][j-1]==0)
                   fieldb[i][j-1]=-1;
                 if(j<9 && fieldb[i][j+1]==0)
                   fieldb[i][j+1]=-1;
              }
           }
      }
   }
   if (ships[1] && ships[2] && ships[3] && ships[4] &&ships[5])
       document.getElementById("start").style.visibility="visible";
}
function del(ship)
{
         document.getElementById("start").style.visibility="hidden";
         if (ships[ship]!=1)
         {
             alert("Schiff noch nicht gesetzt!");
             return 0;
         }
         for (i=0;i<10;i++)
         {
            for (j=0;j<10;j++)
            {
                 if(fieldb[i][j]==ship)
                 {
                    fieldb[i][j]=0;
                    val="b"+i+""+j;
                    document.getElementById(val).style.backgroundColor="#0099ff";
                    ships[ship]=0;
                    if(i>0 && fieldb[i-1][j]==-1)
                       fieldb[i-1][j]=0;
                    if(i<9 && fieldb[i+1][j]==-1)
                       fieldb[i+1][j]=0;
                    if(j>0 && fieldb[i][j-1]==-1)
                       fieldb[i][j-1]=0;
                    if(j<9 && fieldb[i][j+1]==-1)
                       fieldb[i][j+1]=0;
                 }
            }
         }
}
function rnd1()
{
        for (i=1;i<6;i++)
             ships[i]=0;
        for (i=0;i<10;i++)
         {
            for (j=0;j<10;j++)
            {
                    val="b"+i+""+j;
                    document.getElementById(val).style.backgroundColor="#0099ff";
                    fieldb[i][j]=0;
            }
         }
        rnd2(5);
        rnd2(4);
        rnd2(3);
        rnd2(2);
        rnd2(1);
}
function rnd2(ship)
{
   x=Math.floor(Math.random()*10);
   y=Math.floor(Math.random()*10);
   z=Math.floor(Math.random()*2);
   if ((x+ship>10 && z==0) || (y+ship>10 && z==1))
   {
       rnd2(ship);
       return 0;
   }
   if (x!=0 && x!=1 && x!=2 && x!=3 && x!=4 && x!=5 && x!=6 && x!=7 && x!=8 && x!=9)
      {
             rnd2(ship);
             return 0;
      }
   if (y!=0 && y!=1 && y!=2 && y!=3 && y!=4 && y!=5 && y!=6 && y!=7 && y!=8 && y!=9)
      {
             rnd2(ship);
             return 0;
      }
   if (z)
   {
       for (i=y;i<y+ship;i++)
       {
            if (fieldb[x][i]!=0)
            {
                   rnd2(ship);
                   return 0;
            }
       }
       for (i=y;i<y+ship;i++)
       {
            val="b"+x+""+i;
            document.getElementById(val).style.backgroundColor="#ffff00";
            fieldb[x][i]=ship;
       }
   }
   else
   {
       for (i=x;i<x+ship;i++)
       {
            if (fieldb[i][y]!=0)
            {
                   rnd2(ship);
                   return 0;
            }
       }
       for (i=x;i<x+ship;i++)
       {
            val="b"+i+""+y;
            document.getElementById(val).style.backgroundColor="#ffff00";
            fieldb[i][y]=ship;
       }
   }
   for (i=0;i<10;i++)
   {
      for (j=0;j<10;j++)
      {
           {
              if(fieldb[i][j]==ship)
              {
                 if(i>0 && fieldb[i-1][j]==0)
                   fieldb[i-1][j]=-1;
                 if(i<9 && fieldb[i+1][j]==0)
                   fieldb[i+1][j]=-1;
                 if(j>0 && fieldb[i][j-1]==0)
                   fieldb[i][j-1]=-1;
                 if(j<9 && fieldb[i][j+1]==0)
                   fieldb[i][j+1]=-1;
              }
           }
      }
   }
    ships[ship]=1;
    document.getElementById("start").style.visibility="visible";
}
function begin()
{
    document.getElementById("place").style.display="none";
    document.getElementById("game").style.display="block";
    play=1;
    count=0;
    sunk = new Array(6);
    sunk2 = new Array(6);
    count=0;
    for (i=1;i<6;i++)
    {
         sunk[i]=0;
         sunk2[i]=0;
    }
}
function shoot(x,y)
{
         if (!play)
             return 0;
         count++;
         if (x==0) a="A";
         if (x==1) a="B";
         if (x==2) a="C";
         if (x==3) a="D";
         if (x==4) a="E";
         if (x==5) a="F";
         if (x==6) a="G";
         if (x==7) a="H";
         if (x==8) a="I";
         if (x==9) a="J";
         document.getElementById("sp1").value="Schuss auf "+a+""+y;
         val="a"+x+""+y;
         if (fielda[x][y]<1)
         {
             document.getElementById(val).style.backgroundImage="url(missed.gif)";
             document.getElementById("sp2").value="Daneben";
             document.getElementById("sp2").style.fontWeight="normal";
         }
         else
         {
             document.getElementById(val).style.backgroundImage="url(hit.gif)";
             fielda[x][y]=10;
             document.getElementById("sp2").value="Treffer";
             document.getElementById("sp2").style.fontWeight="normal";
         }
         for (k=1;k<6;k++)
         {
              check=0;
              for (i=0;i<10;i++)
              {
                   for (j=0;j<10;j++)
                   {
                        {
                            if (fielda[i][j]==k)
                            {
                                check++;
                            }
                        }
                   }
              }
              if (check==0 && sunk[k]==0)
              {
                  sunk[k]=1;
                  if (k==5) shipname="Flugzeugtraeger";
                  if (k==4) shipname="Zerstoerer";
                  if (k==3) shipname="Fregatte";
                  if (k==2) shipname="Kreuzer";
                  if (k==1) shipname="Schnellboot";
                  document.getElementById("sp2").value=shipname+" versenkt";
                  document.getElementById("sp2").style.fontWeight="bold";
                  for (i=0;i<10;i++)
                  {
                     for (j=0;j<10;j++)
                     {
                          newcol=1;
                          if(fielda[i][j]==10)
                          {
                             if (i>0 && fielda[i-1][j]>0 && fielda[i-1][j]<6)
                                 newcol=0;
                             if (i<9 && fielda[i+1][j]>0 && fielda[i+1][j]<6)
                                 newcol=0;
                             if (j>0 && fielda[i][j-1]>0 && fielda[i][j-1]<6)
                                 newcol=0;
                             if (j<9 && fielda[i][j+1]>0 && fielda[i][j+1]<6)
                                 newcol=0;
                             if (newcol)
                                 document.getElementById("a"+i+""+j).style.backgroundColor="#900000";
                          }
                     }
                  }
              }
         }
         won=1;
         for (k=1;k<6;k++)
         {
              if (sunk[k]==0)
                 won=0;
         }
         if (won)
         {
                  score=-count;
                  for (k=1;k<6;k++)
                  {
                       if (sunk2[k]==0)
                          score+=50;
                  }
                  for (i=0;i<10;i++)
                  {
                     for (j=0;j<10;j++)
                     {
                          if(fieldb[i][j]>0 && fieldb[i][j]<6)
                             score+=10;
                     }
                  }
                  alert("Erzielte Punkte: "+score);
         }
         compshoot();
}
function compshoot()
{
         if (comphit1==10)
         do
         {
                    x=Math.floor(Math.random()*10);
                    y=Math.floor(Math.random()*10);
         }
         while (fieldb[x][y]>9)
         else
         {
                    next=0;
                    pccount=1;
                    do
                    {
                           if (dir0 == 4 || miss==1 || dir==4)
                               dir=Math.floor(Math.random()*4);
                           if (dir==0 && comphit1>0 && fieldb[comphit1-1][comphit2] < 10)
                           {
                               x=comphit1-1;
                               y=comphit2;
                               next=1;
                           }
                           if (dir==1 && comphit1<9 && fieldb[comphit1+1][comphit2] < 10)
                           {
                               x=comphit1+1;
                               y=comphit2;
                               next=1;
                           }
                           if (dir==2 && comphit2>0 && fieldb[comphit1][comphit2-1] < 10)
                           {
                               x=comphit1;
                               y=comphit2-1;
                               next=1;
                           }
                           if (dir==3 && comphit2<9 && fieldb[comphit1][comphit2+1] < 10)
                           {
                               x=comphit1;
                               y=comphit2+1;
                               next=1;
                           }
                           if (!next)
                           {
                               if (dir0==0 && fieldb[comphit10+pccount][comphit20] < 10)
                               {
                                   x=comphit10+pccount;
                                   y=comphit20;
                                   next=1;
                               }
                               if (dir0==1 && fieldb[comphit10-pccount][comphit20] < 10)
                               {
                                   x=comphit10-pccount;
                                   y=comphit20;
                                   next=1;
                               }
                               if (dir0==2 && fieldb[comphit10][comphit20+pccount] < 10)
                               {
                                   x=comphit10;
                                   y=comphit20+pccount;
                                   next=1;
                               }
                               if (dir0==3 && fieldb[comphit10][comphit20-pccount] < 10)
                               {
                                   x=comphit10;
                                   y=comphit20-pccount;
                                   next=1;
                               }
                               pccount++;
                           }
                    }
                    while (next==0)
         }
         if (x==0) a="A";
         if (x==1) a="B";
         if (x==2) a="C";
         if (x==3) a="D";
         if (x==4) a="E";
         if (x==5) a="F";
         if (x==6) a="G";
         if (x==7) a="H";
         if (x==8) a="I";
         if (x==9) a="J";
         document.getElementById("co1").value="Schuss auf "+a+""+y;
         val="b"+x+""+y;
         if (fieldb[x][y]<1)
         {
             document.getElementById(val).style.backgroundImage="url(missed.gif)";
             document.getElementById("co2").value="Daneben";
             document.getElementById("co2").style.fontWeight="normal";
             fieldb[x][y]=11;
             miss=1;
         }
         else
         {
             document.getElementById(val).style.backgroundImage="url(hit.gif)";
             fieldb[x][y]=10;
             document.getElementById("co2").value="Treffer";
             document.getElementById("co2").style.fontWeight="normal";
             comphit1=x;
             comphit2=y;
             miss=0;
             if (next==1 && dir0==4)
                dir0=dir;
             if (comphit10==10 && comphit20==10)
             {
                 comphit10=x;
                 comphit20=y;
             }
         }
         for (k=1;k<6;k++)
         {
              check=0;
              for (i=0;i<10;i++)
              {
                   for (j=0;j<10;j++)
                   {
                        {
                            if (fieldb[i][j]==k)
                            {
                                check++;
                            }
                        }
                   }
              }
              if (check==0 && sunk2[k]==0)
              {
                  sunk2[k]=1;
                  if (k==5) shipname="Flugzeugtraeger";
                  if (k==4) shipname="Zerstoerer";
                  if (k==3) shipname="Fregatte";
                  if (k==2) shipname="Kreuzer";
                  if (k==1) shipname="Schnellboot";
                  document.getElementById("co2").value=shipname+" versenkt";
                  document.getElementById("co2").style.fontWeight="bold";
                  comphit1=10;
                  comphit2=10;
                  comphit10=10;
                  comphit20=10;
                  dir=4;
                  dir0=4;
                  next=0;
                  for (i=0;i<10;i++)
                  {
                     for (j=0;j<10;j++)
                     {
                          if(fieldb[i][j]==10)
                          {
                             if(i>0 && fieldb[i-1][j]==-1)
                                fieldb[i-1][j]=12;
                             if(i<9 && fieldb[i+1][j]==-1)
                                fieldb[i+1][j]=12;
                             if(j>0 && fieldb[i][j-1]==-1)
                                fieldb[i][j-1]=12;
                             if(j<9 && fieldb[i][j+1]==-1)
                                fieldb[i][j+1]=12;
                          }
                     }
                  }
              }
         }
         won=1;
         for (k=1;k<6;k++)
         {
              if (sunk2[k]==0)
                 won=0;
         }
         if (won)
         {
             alert("Verloren");
             location.reload();
         }
}