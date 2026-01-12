import ErrorBoundary from "./ErrorBoundary";

function BuggyComponent() {
  const data = null;
  return <h3>{data.map(item=> item)}</h3>;  //error here
}

function App() {
  return(
    <div style={{padding: "20px",color:"blue"}}>
      <h1>Error Handling Example</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>

    </div>
  )
}

export default App
