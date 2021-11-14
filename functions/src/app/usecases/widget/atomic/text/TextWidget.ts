import Widget from "../../../../common/widget/Widget";
import ColorProps from "../../../../model/common/util/ColorProps";
import SizeProps from "../../../../model/common/util/SizeProps";
import TextContentProps from "../../../../model/common/util/TextContentProps";

export interface TextProps extends TextContentProps, ColorProps, SizeProps {}

const TextWidget = (props: TextProps) =>
  Widget.builder<TextProps>("text").setData(props);

export default TextWidget;
