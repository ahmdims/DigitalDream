import WhyUsBox1 from "./whyUsBox1";
import WhyUsBox3 from "./whyUsBox3";
import WhyUsBox2 from "./whyusBox2";
export default function WhyUsContent() {
  return (
    <div className="container mx-auto max-w-[1120px]">
      {/* 1 */}
      <WhyUsBox1 />
      {/* 2 */}
      <WhyUsBox2 />
      {/* 3 */}
      <WhyUsBox3 />
    </div>
  );
}
