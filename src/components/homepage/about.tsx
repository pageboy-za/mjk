import { CameraIcon } from "@heroicons/react/20/solid";
import ScriptureQuote from "@/components/global/scriptureQuote";
import Image from "next/image";

export default function About() {
  return (
    <div className="overflow-hidden bg-white" id="about">
      <div className="relative px-6 pt-8 pb-16 mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 bville sm:text-4xl">
              About Calvary Chapel Cambridge
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                  <Image
                    className="object-cover object-center rounded-lg shadow-lg grayscale"
                    src="/cambridgeArial.jpg"
                    alt=""
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="flex invisible mt-3 text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2"></span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base max-w-prose lg:max-w-none">
              <p className="prose text-gray-900">
                Calvary Chapel Cambridge is an independent non denominational
                church.
              </p>
            </div>
            <div className="pb-8 mx-auto mt-5 prose text-gray-900 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                We are a family of born again believers who love Jesus, and seek
                to serve Him by obeying His Holy inspired word found in the
                Bible.
              </p>
              <p>
                We believe that true and abundant life begins by believing in
                the finished work of Jesus Christ on the cross of Calvary.
              </p>
            </div>
            <ScriptureQuote reference={"Matthew 11:28-30"} version={"NKJV"}>
              Come to Me, all you who labor and are heavy laden, and I will give
              you rest. Take My yoke upon you and learn from Me, for I am gentle
              and lowly in heart, and you will find rest for your souls. For My
              yoke is easy and My burden is light.”
            </ScriptureQuote>
          </div>
        </div>
      </div>
    </div>
  );
}
