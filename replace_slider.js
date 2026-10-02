const fs = require('fs');

const content = fs.readFileSync('src/Pages/Main.js', 'utf8');

const startMarker = '        {/* all the project */}';
const endMarker = '        </section>';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker, startIdx) + endMarker.length;

const newContent = `        {/* all the project */}
        <section className="relative hidden md:block py-[5rem]">
          <div className="container mx-auto">
            <div className="text-[2rem] ml-[10%] mb-[4rem] border-b-[2px] border-[#353435] w-max">
              <p className="">SOME OF</p>
              <p className="font-bold">MY WORK.</p>
            </div>
            <MouseParallaxContainer
              useWindowMouseEvents
              className="w-full h-full paralax"
              globalFactorX={0.3}
              globalFactorY={0.3}
              resetOnLeave
            >
              <div className="flex flex-wrap justify-center gap-14 px-[2rem]">
                {gabung &&
                  gabung.map((data, key) => {
                    const myImage = new CloudinaryImage(data.image, {
                      cloudName: "unm",
                    });
                    return (
                      <MouseParallaxChild
                        key={key}
                        factorX={data.factoryX}
                        factorY={data.factoryY}
                        className="ease-out duration-500 flex items-center justify-center"
                      >
                        <Link
                          to={\`/portofolio/\${data.id}\`}
                          state={data.width}
                        >
                          <motion.div
                            exit={hoverId !== data.id && { opacity: 0 }}
                            className="relative cursor-pointer bg-gray-200"
                            style={{ width: data.width }}
                            id={data.id}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                          >
                            <AdvancedImage
                              loading="lazy"
                              cldImg={myImage}
                              className="border-[#353435] border-dashed border-[2px] relative hover:border-dashed hover:opacity-70 duration-500 w-full"
                            />
                            <p
                              className={\`\${
                                idProject === data.id
                                  ? "flex duration-500"
                                  : "hidden"
                              } absolute ease-out left-[50%] top-[50%] z-0 text-[1rem] bg-black text-white duration-300 px-3 py-1 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap\`}
                            >
                              {data.name}
                            </p>
                          </motion.div>
                        </Link>
                      </MouseParallaxChild>
                    );
                  })}
              </div>
            </MouseParallaxContainer>
          </div>
        </section>`;

if (startIdx !== -1 && endIdx !== -1) {
  const finalContent = content.slice(0, startIdx) + newContent + content.slice(endIdx);
  fs.writeFileSync('src/Pages/Main.js', finalContent, 'utf8');
  console.log("Replacement successful.");
} else {
  console.log("Could not find markers.");
}
