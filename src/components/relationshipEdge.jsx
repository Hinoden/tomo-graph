import {
  BaseEdge,
  EdgeLabelRenderer,
  MarkerType,
} from "reactflow";

export default function RelationshipEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
  markerStart,
  style,
  label,
  data,
}) {

  // +40 = curve downward
  // -40 = curve upward
  const offset = data?.offset ?? 0;

  const midX = (sourceX + targetX) / 2;
  const midY = (sourceY + targetY) / 2 + offset;

  const path = `
    M ${sourceX},${sourceY}
    Q ${midX},${midY}
      ${targetX},${targetY}
  `;

  return (
    <>
      <BaseEdge
        id={id}
        path={path}
        style={style}
        markerEnd={markerEnd}
        markerStart={markerStart}
      />

      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${midX}px, ${midY}px)`,
            background: "white",
            padding: "2px 6px",
            borderRadius: 5,
            pointerEvents: "none",
            fontSize: 12,
          }}
        >
          {label}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}