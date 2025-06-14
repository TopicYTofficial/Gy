<div class="demon-entry">
  <img src="Screenshot_2025-06-14-17-01-43-840_com.geode.launcher.jpg" alt="Ametyst Wawe">
  <h3>#1 - Amethyst Wawe</h3>
  <p>от Amethyst | ID: 109</p>
</div>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Уровни</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="level-container">
        <!-- Новый уровень: Amethyst Wave -->
        <div class="level-tab" onclick="openLevelModal('Amethyst Wave', 'Amethyst', '109', 'Этот уровень уже прошли!')">
            <h3>✔ #1 - Amethyst Wave</h3>
            <p>or Amethyst | ID: 109</p>
        </div>

        <!-- Существующие уровни -->
        <div class="level-tab" onclick="openLevelModal('UnMaded', 'Nazorro_', '327', 'Этот уровень ещё никто не прошёл...')">
            <h3>UnMaded</h3>
            <p>Верифер: Nazorro_</p>
        </div>

        <div class="level-tab" onclick="openLevelModal('dep', 'ItzMiny', '327', 'Описание уровня dep...')">
            <h3>#4 - dep</h3>
            <p>or ItzMiny | ID: 327</p>
        </div>
    </div>

    <!-- Модальное окно (остаётся без изменений) -->
    <div id="level-modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeLevelModal()">&times;</span>
            <h2 id="modal-level-name"></h2>
            <p><strong>Верифер:</strong> <span id="modal-verifier"></span></p>
            <p><strong>ID:</strong> <span id="modal-level-id"></span></p>
            <p><strong>Прошедшие игроки:</strong> <span id="modal-completers"></span></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
