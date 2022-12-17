import { computed } from "vue";
import ClipboardJS from "clipboard";
import { Tooltip } from "bootstrap";

export default class service {
  pollLink = "Ici le lien Participants vers le sonddage";
  clipboard;
  tooltip;
  showTooltip = computed(() => {
    this.clipboard = new ClipboardJS(".clipboardBtn");

    this.clipboard.on("success", function (e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);

      e.clearSelection();
    });

    this.tooltip = new Tooltip(document.body.querySelector(".clipboardBtn"), {
      selector: "clipboardBtn",
      title: "Lien copié !",
    });
    this.tooltip.toggle();
    window.setTimeout(() => {
      this.tooltip.hide();
    }, 2000);
  });

  isPollLink = () => {
    return this.pollLink
  }

  isShowTooltip = () => {
    return this.showTooltip.value
  }
}
