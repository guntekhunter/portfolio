const fs = require('fs');

let content = fs.readFileSync('src/Pages/Main.js', 'utf8');

content = content.replace(/const \[next, setNext\] = useState\(0\);\s*/, '');
content = content.replace(/const containerRef = useRef\(null\);\s*/, '');
content = content.replace(/const slideLeft = \(\) => {[\s\S]*?};\s*/g, '');
content = content.replace(/const slideRight = \(\) => {[\s\S]*?};\s*/g, '');
content = content.replace(/const handleScroll = \(\) => {[\s\S]*?};\s*/g, '');

fs.writeFileSync('src/Pages/Main.js', content, 'utf8');
