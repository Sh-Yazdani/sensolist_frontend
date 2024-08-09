import { fetchThings } from "@/lib/features/things/thingsSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { ArrowCircleRight2, Cpu } from "iconsax-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyThings from "./MyThingsCard";

export default function HomeMyThings() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchThings());
  }, [dispatch]);

  const { things, loading, error } = useSelector(
    (state: RootState) => state.thingsSlice
  );
  console.log("things", things);
  return (
    <div
      className="flex flex-col w-full rounded-2xl bg-black-opacity-50 dark:bg-white-opacity-50
   p-4 overflow-x-auto h-1/2"
    >
      <div className="flex items-center">
        <Cpu className=" text-secondary-main size-6 mr-2" />
        <span className=" text-neutral-8 capitalize dark:text-neutral-2 lg:text-lg">
          My things
        </span>
      </div>
      <div className="flex mt-4 gap-4 w-fit m-auto h-3/4 min-w-full text-neutral-7 dark:text-neutral-4">
        {things.length ? (
          <>
            {/* {fakeThings.map((thing, i) => (
              <MyThings
                key={thing.id}
                name={thing.name}
                image={thing.images[0]}
              />
            ))} */}
            {things.map((thing) => (
              <MyThings
                id={thing.id}
                key={thing.id}
                name={thing.name}
                image={"/assets/thing.jpeg"}
              />
            ))}
            <MyThings
              id={"0"}
              name={"Product's name"}
              image={"/assets/thing.jpeg"}
            />
            <Link
              href="/myThings"
              className=" flex flex-col justify-center items-center ml-auto"
            >
              <ArrowCircleRight2 />
              <span className=" capitalize whitespace-nowrap text-sm">
                view all
              </span>
            </Link>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
