import N from'node:fs'
let S=T=>{
let U=T.replace(/\n/g,''),w=T.indexOf('\n'),G=[],X=[],P=0,i,j,k,e,n,OB=[],D=[-w,w,-1,1],LO,SN,q,hd,L='udlr'
for(i=0;j=U[i];i++)/[.*+]/.test(j)&&G.push(i),/[$*]/.test(j)&&X.push(i),/[@+]/.test(j)&&(P=i)
let F=(bx,s)=>{let st=[s],p;SN={[s]:' '};LO=s
while(p=st.pop()){if(p<LO)LO=p
for(e=4;e--;)if(!SN[n=p+D[e]]&&U[n]!='#'&&!OB[n]&&!bx.includes(n)){SN[n]=SN[p]+L[e];st.push(n)}}}
let Q=(GS,X0,P0)=>{
let dn=b=>b.every(x=>GS.includes(x))
if(dn(X0))return['',P0]
let SB=[[X0,P0,'']],VS={}
for(hd=0;SB[hd];hd++){let[bx,pp,sg]=SB[hd];F(bx,pp);let sn=SN
for(j=0;bx[j];j++){let b=bx[j]
for(k=4;k--;){let u=b-D[k],t=b+D[k]
if(!sn[u]||U[t]=='#'||bx.includes(t))continue
let g2=sg+sn[u]+L[k],nb=bx.with(j,t).sort((a,c)=>a-c)
F(nb,b);q=LO+';'+nb
if(VS[q])continue;VS[q]=1
if(dn(nb))return[g2,b]
SB.push([nb,b,g2])}}}return null}
let rf=b=>(b%w>6)*2+(b/w>9),pl=P,out=''
X.map(j=>OB[j]=1)
for(i=4;i--;){
let XB=X.filter(b=>rf(b)==i),GB=G.filter(b=>rf(b)==i)
XB.map(j=>OB[j]=0)
let s=Q(GB,XB,pl)
if(!s)return''
GB.map(j=>OB[j]=1)
out+=s[0];pl=s[1]}
return out}
N.readdirSync('/input').map(d=>{let p='/output/'+d;N.mkdirSync(p);N.writeFileSync(p+'/solution.txt',S(''+N.readFileSync('/input/'+d+'/level.txt')))})