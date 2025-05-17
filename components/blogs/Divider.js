import styled from "styled-components";

const StyledDivider = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1px"};
  background: none;
  border: none;
  border-top: ${({ direction, color }) =>
    direction === "horizontal" ? `1px solid ${color || "#AFAFAF"}` : "none"};
  border-left: ${({ direction, color }) =>
    direction === "vertical" ? `1px solid ${color || "#AFAFAF"}` : "none"};
  margin: ${({ margin }) => margin || "1.5rem 0"};
  align-self: ${({ align }) => align || "stretch"};
`;

export default function Divider({
  direction = "horizontal",
  width,
  height,
  color,
  margin,
  align,
  ...props
}) {
  return (
    <StyledDivider
      direction={direction}
      width={width}
      height={height}
      color={color}
      margin={margin}
      align={align}
      {...props}
    />
  );
}
