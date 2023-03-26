import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 50%;
  margin-top: 6rem;

  h3 {
    margin-bottom: 2rem;
  }

  table {
    width: 100%;

    tr {
      height: 4rem;

      td {
        font-size: 2rem;
      }
    }
  }
`;