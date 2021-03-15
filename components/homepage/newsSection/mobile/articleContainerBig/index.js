import Truncate from "react-truncate";
import Link from 'next/link'
const Article = ({data, articleBig, boxTitle}) => {
    return (
      <>
        <Link href={`/page/${data && data.slug}`}>
          <a>
            <div
              className="articleBig mx-auto position-relative my-3"
              style={{ height: articleBig && articleBig.height }}
            >
              <div
                className="boxTitle position-absolute"
                style={{
                  height: boxTitle && boxTitle.height,
                  width: boxTitle && boxTitle.width,
                }}
              >
                <div
                  className="textTitle"
                  style={{ margin: "20px 20px 18px 20px" }}
                >
                  <div className="banner pb-1">TRIKINET</div>
                  {/* <br /> */}
                  <Truncate lines={3}>
                    <div>{data && data.title.rendered}</div>
                  </Truncate>
                </div>
              </div>
              <div
                class="w-100 h-100"
                // src={
                //   data &&
                //   data._embedded["wp:featuredmedia"][0].media_details.sizes.full
                //     .source_url
                // }
                alt=""
                style={{
                  backgroundImage:
                    data &&
                    `linear-gradient(rgba(200, 200, 200, 0.4), rgba(200, 200, 200, 0.4)),url(${data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url})`,
                  objectFit: "fit",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </a>
        </Link>
      </>
    );
};

export default Article;