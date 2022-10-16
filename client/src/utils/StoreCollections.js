import { QUERY_USER_COLLECTION } from "./queries";
import { ADD_CARD } from "./mutations";

import { useMutation, useQuery } from "@apollo/client";

const StoreCollections = async () => {
  const userId = JSON.parse(localStorage.getItem("userData"));
  const id = userId._id;
  console.log(userId);
  const { loading, data, error } = await useQuery(
    QUERY_USER_COLLECTION,
    {
      variables: { userId: id },
    },
    []
  );
  if (loading) return "Loading";
  console.log(data);

  localStorage.setItem("userCollections", JSON.stringify(data));

  return;
};

export default StoreCollections;
