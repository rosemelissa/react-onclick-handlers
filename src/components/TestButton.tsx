function TestButton(): JSX.Element {
  return (
    <button
      onClick={() => {
        console.log("stan Jungkook");
        window.open();
      }}
    >
      Make me do something when I'm clicked...
    </button>
  );
}

export default TestButton;
