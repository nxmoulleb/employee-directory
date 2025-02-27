import React from "react";
import { render, screen, waitFor, prettyDOM } from "@testing-library/react";
import CardGrid from "../card-grid";
import '@testing-library/jest-dom';

describe("CardGrid", () => {
  const employees = [
    {
      name: "Alice Johnson",
      role: "Software Engineer",
      department: "Engineering",
      email: "alice@example.com",
      profilePicture: "https://example.com/alice.jpg",
      yearsAtCompany: 3,
    },
    {
      name: "Bob Smith",
      role: "Product Manager",
      department: "Product",
      email: "bob@example.com",
      profilePicture: "https://example.com/bob.jpg",
      yearsAtCompany: 5,
    },
    {
      name: "Charlie Lee",
      role: "Designer",
      department: "Design",
      email: "charlie@example.com",
      profilePicture: "https://example.com/charlie.jpg",
      yearsAtCompany: 1,
    },
    {
      name: "David Wilson",
      role: "Data Scientist",
      department: "Analytics",
      email: "david@example.com",
      profilePicture: "https://example.com/david.jpg",
      yearsAtCompany: 4,
    },
    {
      name: "Eva Carter",
      role: "HR Specialist",
      department: "Human Resources",
      email: "eva@example.com",
      profilePicture: "https://example.com/eva.jpg",
      yearsAtCompany: 2,
    },
    {
      name: "Frank Thompson",
      role: "Marketing Coordinator",
      department: "Marketing",
      email: "frank@example.com",
      profilePicture: "https://example.com/frank.jpg",
      yearsAtCompany: 3,
    },
    {
      name: "Grace Davis",
      role: "UX Researcher",
      department: "Design",
      email: "grace@example.com",
      profilePicture: "https://example.com/grace.jpg",
      yearsAtCompany: 2,
    },

    {
      name: "Henry Martinez",
      role: "System Administrator",
      department: "IT",
      email: "henry@example.com",
      profilePicture: "https://example.com/henry.jpg",
      yearsAtCompany: 6,
    },
    {
      name: "Irene Taylor",
      role: "Business Analyst",
      department: "Product",
      email: "irene@example.com",
      profilePicture: "https://example.com/irene.jpg",
      yearsAtCompany: 3,
    },
    {
      name: "Jack Wilson",
      role: "Front-end Developer",
      department: "Engineering",
      email: "jack@example.com",
      profilePicture: "https://example.com/jack.jpg",
      yearsAtCompany: 1,
    },
  ];

  it("renders 10 employees when 10 employees are passed in with no input", () => {
    render(<CardGrid employees={employees} input={""} />);
    const employee_list = screen.queryAllByTestId("employee");
    expect(employee_list.length).toBe(10);
  });

  it("renders 0 employees when 0 employees are passed in", () => {
    render(<CardGrid employees={{}} input={""} />);
    const employee_list = screen.queryAllByTestId("employee");
    expect(employee_list.length).toBe(0);
  });

  it("renders the employee whos name is searched", () => {
    render(<CardGrid employees={employees} input={"alice"} />);
    const employee_list = screen.queryAllByTestId("employee");
    expect(employee_list.length).toBe(1);
    const alice = screen.getByText("Alice Johnson");
    expect(alice).not.toBeUndefined();
  });

  it("renders the employees whos department is searched", () => {
    render(<CardGrid employees={employees} input={"design"} />);
    const employee_list = screen.queryAllByTestId("employee");
    expect(employee_list.length).toBe(2);
  });

  it("renders 0 employees when input doesnt exist in names or departments", () => {
    render(<CardGrid employees={employees} input={"asdfasdfasdfasdf"} />);
    const employee_list = screen.queryAllByTestId("employee");
    expect(employee_list.length).toBe(0);
  });

  it("renders multiple employees when the search input overlaps with multiple names or departments", () => {
    render(<CardGrid employees={employees} input={"d"} />);
    const employee_list = screen.queryAllByTestId("employee");
    expect(employee_list.length).toBe(5);
  });

  it("renders gold border for someone who has been at the company 5+ years", () => {
    render(
      <CardGrid
        employees={[{
          name: "Bob Smith",
          role: "Product Manager",
          department: "Product",
          email: "bob@example.com",
          profilePicture: "https://example.com/bob.jpg",
          yearsAtCompany: 5,
        }]}
        input={""}
      />
    );
    expect(screen.getByTestId('employee')).toHaveStyle(`border: 2px solid goldenrod`)  

  });

  it("renders red border for someone who has been at the company less than 1 year", () => {
    render(
        <CardGrid
          employees={[{
            name: "Bob Smith",
            role: "Product Manager",
            department: "Product",
            email: "bob@example.com",
            profilePicture: "https://example.com/bob.jpg",
            yearsAtCompany: 1,
          }]}
          input={""}
        />
      );
      expect(screen.getByTestId('employee')).toHaveStyle(`border: 2px solid orangered`) 
  });

  it("renders gray border for someone who has been at the company between 1 and 5 years", () => {
    render(
        <CardGrid
          employees={[{
            name: "Bob Smith",
            role: "Product Manager",
            department: "Product",
            email: "bob@example.com",
            profilePicture: "https://example.com/bob.jpg",
            yearsAtCompany: 3,
          }]}
          input={""}
        />
      );
      expect(screen.getByTestId('employee')).toHaveStyle(`border: 2px solid gray`) 
  });
});
