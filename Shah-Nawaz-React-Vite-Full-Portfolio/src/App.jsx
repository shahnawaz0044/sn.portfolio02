import {motion} from 'framer-motion';
export default function App(){
return <main style={{background:'#050505',color:'white',minHeight:'100vh',padding:50}}>
<img src='/logo.svg' width='250'/>
<h1>Shah Nawaz</h1>
<h2>Digital Marketer & Researcher</h2>
<p>SEO × AI × Growth</p>
<motion.div animate={{opacity:[.4,1]}}>Digital Growth Strategies Through AI & Research</motion.div>
<section>Expertise: SEO | GEO | AEO | AI Marketing</section>
<section>Projects: SEO Framework | AI Studio | Market Research</section>
</main>
}