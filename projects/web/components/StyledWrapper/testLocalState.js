import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";

export const LOCAL_STATE_QUERY = gql`
  query {
    buttonOpen @client
  }
`;

export const MUTATE_LOCAL_STATE = gql`
  mutation {
    toggleButton @client
  }
`;

export const LocalStateButton = () => (
  <React.Fragment>
    <Link href="/">
      <a> Boilerplate </a>
    </Link>
    <Mutation mutation={MUTATE_LOCAL_STATE}>
      {toggleButton => (
        <Query query={LOCAL_STATE_QUERY}>
          {({ data }) => (
            <div>
              <button onClick={toggleButton}> Toggle Local State</button>
              <p> State: {data.buttonOpen ? "True" : "False"} </p>
            </div>
          )}
        </Query>
      )}
    </Mutation>
  </React.Fragment>
);
