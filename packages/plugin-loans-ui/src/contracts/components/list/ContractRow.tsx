import _ from "lodash";
import FormControl from "@erxes/ui/src/components/form/Control";
import { formatValue } from "@erxes/ui/src/utils/core";
import React from "react";
import { FlexItem } from "../../styles";
import { IContract } from "../../types";
import { useNavigate } from "react-router-dom";

type Props = {
  contract: IContract;
  isChecked: boolean;
  toggleBulk: (contract: IContract, isChecked?: boolean) => void;
};

function displayValue(contract, name) {
  const value = _.get(contract, name);

  if (name === "primaryName") {
    return <FlexItem>{formatValue(contract.primaryName)}</FlexItem>;
  }
  if (name.includes("Amount"))
    return formatValue(value ? value?.toLocaleString() : value);

  return formatValue(value);
}

function ContractRow({ contract, isChecked, toggleBulk }: Props) {
  const navigate = useNavigate()
  const onChange = (e) => {
    if (toggleBulk) {
      toggleBulk(contract, e.target.checked);
    }
  };

  const onClick = (e) => {
    e.stopPropagation();
  };

  const onTrClick = () => {
    navigate(`/erxes-plugin-loan/contract-details/${contract._id}`);
  };

  return (
    <tr onClick={onTrClick}>
      <td onClick={onClick}>
        <FormControl
          checked={isChecked}
          componentclass="checkbox"
          onChange={onChange}
        />
      </td>
      <td key={"type"}>{displayValue(contract, "leaseType")}</td>
      <td key={"contractType"}>
        {displayValue(contract, "contractType.name")}
      </td>
      <td key={"classification"}>{displayValue(contract, "classification")}</td>
      <td key={"number"}>{displayValue(contract, "number")} </td>
      <td key={"firstName"}>
        {displayValue(contract?.customers, "firstName")}{" "}
      </td>
      <td key={"code"}>{displayValue(contract?.customers, "code")} </td>
      <td key={"loanBalanceAmount"}>
        {displayValue(contract, "loanBalanceAmount")}
      </td>
      <td key={"leaseAmount"}>{displayValue(contract, "leaseAmount")}</td>

      <td key={"tenor"}>{displayValue(contract, "tenor")}</td>
      <td key={"interestRate"}>{displayValue(contract, "interestRate")}</td>
      <td key={"repayment"}>{displayValue(contract, "repayment")}</td>

      <td key={"scheduleDays"}>{displayValue(contract, "scheduleDays")}</td>
      <td key={"status"}>{displayValue(contract, "status")}</td>
      <td />
    </tr>
  );
}

export default ContractRow;
