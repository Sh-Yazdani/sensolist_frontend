import { ThingNodeType } from "@/types/general";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { Devices } from "iconsax-react";

export default function FlowVariableNode({
  data,
  id,
  isConnectable,
}: NodeProps<ThingNodeType>) {
  const { name } = data;
  console.log("thing data", data);
  //   const { variableNodes } = useSelector(
  //     (state: RootState) => state.appletSlice
  //   );

  //   const [selectedNode, setSelectedNode] = useState(
  //     variableNodes?.length
  //       ? variableNodes.filter((item) => item.nodeId === id)[0]
  //       : null
  //   );

  //   useEffect(() => {
  //     setSelectedNode(
  //       variableNodes?.length
  //         ? variableNodes.filter((item) => item.nodeId === id)[0]
  //         : null
  //     );
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [variableNodes]);

  //   const dispatch = useDispatch();
  //   const { clicked, setClicked, points, setPoints } = useContextMenu();
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div
        // onContextMenu={(e) => {
        //   console.log("context right click");
        //   e.preventDefault();
        //   setClicked(true);
        //   setPoints({
        //     x: e.pageX,
        //     y: e.pageY,
        //   });
        // }}
        className=" border border-neutral-6 px-4 py-2 rounded-lg flex items-center text-base dark:text-neutral-4"
      >
        <Devices />
        <span className="ml-2">{name}</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
      {/* {clicked && (
        <ContextMenu
          onEditSelect={() => {
            if (selectedNode)
              dispatch(addEditNode({ nodeData: selectedNode, nodeName: name }));
          }}
          onDelete={() => {
            if (selectedNode)
              dispatch(
                deleteNode({ index: triggerNodes?.indexOf(selectedNode) })
              );
          }}
        />
      )} */}
    </>
  );
}
