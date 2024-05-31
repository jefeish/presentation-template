# Two Equal Columns - Code column

<div class="container">
  <div class="text-column">
    <h2>Text Column</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.</p>
  </div>

  <div class="code-column">
  <pre><code data-line-numbers="3-5|8-10|13-15">
    private int partition(int arr[], int begin, int end) {
      int pivot = arr[end];
      int i = (begin-1);
      for (int j = begin; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;
            int swapTemp = arr[i];
            arr[i] = arr[j];
            arr[j] = swapTemp;
        }
      }
      int swapTemp = arr[i+1];
      arr[i+1] = arr[end];
      arr[end] = swapTemp;
      return i+1;
    }
  </code></pre>
  </div>
</div>

<!-- Add some speaker notes -->

Note:
