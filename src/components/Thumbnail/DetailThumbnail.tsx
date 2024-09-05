interface Props {
  pcMainImgURL: string;
  moblieMainImgURL: string;
  recruitEndDate: Date;
}

export default function DetailThumbnail() {
  return (
    <section className=" bg-slate-600 w-[390px] h-[410px] mx-auto lg:w-[1200px] lg:h-[614px]">
      <img src={``} width={'100%'} alt="썸네일 사진" />
    </section>
  );
}
